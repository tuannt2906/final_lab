import Verify from "@/components/auth/verify";

const VerifyPage = ({ params }: {param: {id: string}}) => {
  const {id} = params;
  return (
    <>
      <Verify
        id = {id}
      />
    </>
  )
}

export default VerifyPage;