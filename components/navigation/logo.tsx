
import { Link } from "lib/transition"

import { Settings } from "@/lib/meta"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <span className="text-md font-semibold">{Settings.title}</span>
    </Link>
  )
}
