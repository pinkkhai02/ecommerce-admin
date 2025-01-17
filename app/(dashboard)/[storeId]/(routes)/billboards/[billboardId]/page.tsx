const BillboardPage = async ({
  params,
}: {
  params: { billboardId: string };
}) => {
  const billboard = await prisma?.billboard.findUnique({
    where: {
      id: params.billboardId,
    },
  });
  return <div>Existing Billboard: {billboard?.label}</div>;
};

export default BillboardPage;
