import Link from "next/link"

const Notfound = () => {
  return (
    <div>
        <h1>Not found</h1>
        <p>sorry, this page you are looking for does not exist</p>
         <Link href="/">return home</Link>
    </div>
  )
}

export default Notfound;