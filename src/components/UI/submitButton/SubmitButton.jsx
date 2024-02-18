import { TailSpin } from "react-loader-spinner";

const SubmitButton = ({isLoading, buttonText}) => {
  return (
    <>
    {isLoading
        ? <TailSpin
            visible={true}
            height="48"
            width="48"
            color="#4285f4"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
        />
        : <button className='button' disabled={isLoading} type='submit'>{buttonText}</button>
    }
    </>
  );
};

export default SubmitButton;
