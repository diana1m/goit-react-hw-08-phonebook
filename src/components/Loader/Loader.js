import { MutatingDots } from  'react-loader-spinner';
import { Overlay } from 'components/Loader/Loader.styled';

export const Loader = () => {
    return (
        <Overlay>
            <MutatingDots 
                height="250"
                width="250"
                color="#383886"
                secondaryColor= '#383886'
                radius='12.5'
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                />
        </Overlay>  
    )
}