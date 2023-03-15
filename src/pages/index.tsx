import { Layout } from "y/components/layout"

const HomePage = () => {
  return (
    <>
      <Layout>
        <div className="mx-auto grid h-full w-full max-w-7xl grid-cols-12 place-items-center px-4 sm:px-6 lg:px-8">
          <main className="col-span-8 border-r">this main content</main>
          <aside className="col-span-4">this is used side bar</aside>
        </div>
      </Layout>
    </>
  )
}

export default HomePage
