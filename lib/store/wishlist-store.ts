'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface WishlistState {
  items: string[] // product IDs
  addItem: (productId: string) => void
  removeItem: (productId: string) => void
  toggleItem: (productId: string) => void
  isInWishlist: (productId: string) => boolean
  clearWishlist: () => void
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (productId: string) => {
        set((state) => {
          if (state.items.includes(productId)) {
            return state
          }
          return { items: [...state.items, productId] }
        })
      },
      
      removeItem: (productId: string) => {
        set((state) => ({
          items: state.items.filter(id => id !== productId)
        }))
      },
      
      toggleItem: (productId: string) => {
        const { items, addItem, removeItem } = get()
        if (items.includes(productId)) {
          removeItem(productId)
        } else {
          addItem(productId)
        }
      },
      
      isInWishlist: (productId: string) => {
        return get().items.includes(productId)
      },
      
      clearWishlist: () => set({ items: [] })
    }),
    {
      name: 'ceramica-novo-tempo-wishlist'
    }
  )
)
