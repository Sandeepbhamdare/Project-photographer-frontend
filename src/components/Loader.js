import { Bars } from 'react-loader-spinner'
const Loader = () => {

    return (
        <>
            <div className='loader-section container-center'>

                <div className='container-center'>
                    <Bars
                        height="80"
                        width="80"
                        color="#030138"
                        ariaLabel="bars-loading"
                        wrapperStyle={{}}
                        wrapperClass="loadingIcon"
                        visible={true}
                    />
                    <p>Loading...</p>
                    <p>Please wait</p>
                </div>
            </div>
        </>
    )
}

export default Loader;