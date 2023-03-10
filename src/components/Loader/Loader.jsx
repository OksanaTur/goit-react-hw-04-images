import { Dna } from 'react-loader-spinner';
import { LoaderSpinner } from './Loader.styled';

export const Loader = () => (
  <LoaderSpinner>
    <Dna
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  </LoaderSpinner>
);