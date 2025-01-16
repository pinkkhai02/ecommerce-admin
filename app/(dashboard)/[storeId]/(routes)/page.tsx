import prismadb from "@/lib/prismadb"

interface DashboardProps {
  params: {
    id: string
  }
}
const DashboardPage: React.FC<DashboardProps> = async ({
  params
}) =>{
  const store = await prismadb.store.findFirst({
    where:{
      id: params.id
    }
  })
    return(
      <div>
        Active Store: { store?.name}
      </div>
    )
}


export default DashboardPage