// orderServices.js
import * as orderRepo from '../repositories/orderRepo.js';
import prisma from '../config/db.js';

// --- Order services ---
export async function getAllOrders() {
  return prisma.order.findMany({
    include: { orderItems: true },
  });
}

export async function getAllOrdersByUserId(userId) {
  return prisma.order.findMany({
    where: { userId },
    include: { orderItems: true },
  });
}

// --- Helper for controllers ---
export async function getOrders(userId, role) {
  if (role === 'ADMIN') {
    return getAllOrders();
  }
  return getAllOrdersByUserId(userId);
}

export async function getOrderById(id) {
  return prisma.order.findUnique({
    where: { id },
    include: { orderItems: true },
  });
}

export async function createOrder(items, userId) {
}

export async function updateOrder(orderId, items, userId) {
}

export async function deleteOrder(orderId) {
  
}
