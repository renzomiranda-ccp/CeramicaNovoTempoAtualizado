'use client'

import { ReactNode } from 'react'
import { CartSidebar } from './cart-sidebar'

export function CartProvider({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <CartSidebar />
    </>
  )
}
