'use client'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { type ReactNode } from 'react'

interface ActiveLinkProps {
  children: ReactNode
  href: string
}

export default function ActiveLink({ children, href }: ActiveLinkProps) {
  const { asPath } = useRouter()

  const className = asPath === href ? 'active' : ''

  return (
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  )
}
