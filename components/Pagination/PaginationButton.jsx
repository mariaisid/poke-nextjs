import Link from "next/link"
import { Button } from "@blueprintjs/core"

const PaginationButton = ({page, disabled = false, text = page}) => {
  return (
    <Link href={{query: {page: page}}}>
      <Button disabled={disabled} outlined>{text}</Button>
    </Link>
  )
}

export default PaginationButton;