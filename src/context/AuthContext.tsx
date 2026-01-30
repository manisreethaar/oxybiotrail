import React, { createContext, useContext, useState, useEffect } from 'react';

// Types
export interface User {
    id: string;
    name: string;
    email: string;
    role?: 'user' | 'admin';
    orders: Order[]; // Personal order history
}

export interface Order {
    id: string;
    date: string;
    customerName: string; // Added for seller view
    customerEmail: string; // Added for seller view
    status: 'Processing' | 'Shipped' | 'Delivered';
    items: CartItem[];
    total: number;
}

export interface CartItem {
    id: string;
    name: string;
    price: string;
    quantity: number;
    image: string;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, name: string) => void;
    logout: () => void;
    addOrder: (order: Order) => void;
    getAllOrders: () => Order[];
    updateOrderStatus: (orderId: string, status: Order['status']) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    // Load user
    useEffect(() => {
        const storedUser = localStorage.getItem('oxygen_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (email: string, name: string) => {
        const role = email.includes('admin') ? 'admin' : 'user';
        const newUser: User = {
            id: Math.random().toString(36).substr(2, 9),
            name,
            email,
            role,
            orders: [], // In a real app we'd fetch this from DB
        };
        // If re-logging in, try to restore personal orders from global list (mock logic)
        const allOrders = JSON.parse(localStorage.getItem('oxygen_all_orders') || '[]');
        const myOrders = allOrders.filter((o: Order) => o.customerEmail === email);
        newUser.orders = myOrders;

        setUser(newUser);
        localStorage.setItem('oxygen_user', JSON.stringify(newUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('oxygen_user');
    };

    const addOrder = (order: Order) => {
        // 1. Update Global "Database"
        const allOrders = JSON.parse(localStorage.getItem('oxygen_all_orders') || '[]');
        const updatedAllOrders = [order, ...allOrders];
        localStorage.setItem('oxygen_all_orders', JSON.stringify(updatedAllOrders));

        // 2. Update Current User State
        if (user) {
            const updatedUser = { ...user, orders: [order, ...user.orders] };
            setUser(updatedUser);
            localStorage.setItem('oxygen_user', JSON.stringify(updatedUser));
        }
    };

    const getAllOrders = (): Order[] => {
        return JSON.parse(localStorage.getItem('oxygen_all_orders') || '[]');
    };

    const updateOrderStatus = (orderId: string, status: Order['status']) => {
        // Update global store
        const allOrders = JSON.parse(localStorage.getItem('oxygen_all_orders') || '[]');
        const updatedOrders = allOrders.map((order: Order) =>
            order.id === orderId ? { ...order, status } : order
        );
        localStorage.setItem('oxygen_all_orders', JSON.stringify(updatedOrders));

        // Note: In this mock, we aren't live-updating the 'user' state if the admin is same as user, 
        // but a refresh will fix it.
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, addOrder, getAllOrders, updateOrderStatus }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
