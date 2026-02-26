"use client";

import { CartItem } from "@/lib/slices/cartSlice";
import { CustomerInfo } from "./ShippingAddress";
import { Edit2 } from "lucide-react";

interface OrderPreviewProps {
  items: CartItem[];
  customerInfo: CustomerInfo;
  deliveryCharge: number;
  subtotal: number;
  onEdit: () => void;
  onConfirm: () => void;
}

export default function OrderPreview({
  items,
  customerInfo,
  deliveryCharge,
  subtotal,
  onEdit,
  onConfirm,
}: OrderPreviewProps) {
  const total = subtotal + deliveryCharge;

  return (
    <div className="bg-gray-50 min-h-screen p-3 sm:p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-xl sm:text-2xl font-bold mb-4">Order Confirmation</h1>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Products */}
          <div className="p-4 sm:p-5 border-b">
            <h2 className="font-semibold mb-3 text-sm sm:text-base">Items ({items.length})</h2>
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <img
                    src={item.image || "/placeholder.png"}
                    alt={item.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs sm:text-sm font-medium truncate">{item.name}</h3>
                    <p className="text-xs text-gray-600 mt-0.5">Qty: {item.quantity}</p>
                    <p className="text-xs sm:text-sm font-semibold mt-0.5">
                      ৳{item.price.toLocaleString()} × {item.quantity} = ৳{(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Address */}
          <div className="p-4 sm:p-5 border-b bg-gray-50">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-semibold text-sm sm:text-base">Delivery Address</h2>
              <button
                onClick={onEdit}
                className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium"
              >
                <Edit2 className="w-3 h-3 sm:w-4 sm:h-4" />
                Edit
              </button>
            </div>
            <div className="text-xs sm:text-sm space-y-1">
              <p className="font-medium">{customerInfo.firstName} {customerInfo.lastName}</p>
              <p>{customerInfo.phone}</p>
              {customerInfo.email && <p>{customerInfo.email}</p>}
              <p className="text-gray-700">{customerInfo.address}, {customerInfo.area}, {customerInfo.city}, {customerInfo.zone}</p>
              <p className="text-gray-600 text-xs">Pickup: {customerInfo.pickupLocation === "home" ? "Home" : "Office"}</p>
            </div>
          </div>

          {/* Summary */}
          <div className="p-4 sm:p-5">
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>৳{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery</span>
                <span>৳{deliveryCharge.toLocaleString()}</span>
              </div>
              <div className="flex justify-between border-t pt-2 font-bold text-sm sm:text-base">
                <span>Total</span>
                <span>৳{total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <button
            onClick={onEdit}
            className="flex-1 bg-white border-2 border-gray-300 hover:bg-gray-50 text-gray-800 font-semibold py-2.5 sm:py-3 rounded-lg transition-colors text-sm sm:text-base"
          >
            Edit
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 sm:py-3 rounded-lg transition-colors text-sm sm:text-base"
          >
            Confirm ৳{total.toLocaleString()}
          </button>
        </div>
      </div>
    </div>
  );
}
