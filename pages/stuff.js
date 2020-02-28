import Link from 'next/link'

const Stuff = () => {

  return(
    <div>
      <p>This is some stuff...</p>
      <Link href="/index">
        <a title="Index Page">Back to the Index...</a>
      </Link>
    </div>
  )
}

export default Stuff;