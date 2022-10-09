import React from "react";
import { Wrapper } from "../../styles/About/Structure.style";
import { FilesWrapper } from '../../styles/About/Download.style';

const Download = () => {
  return (
    <Wrapper>
      <h2>Dokumenty do pobrania</h2>
      <FilesWrapper>
        <a
          href="http://febys.org/wp-content/uploads/2014/06/Regulamin-płacenia-składek-członkowskich.pdf"
          download
        >
          Regulamin płacenia składek członkowskich
        </a>
        <a
          href="http://febys.org/wp-content/uploads/2014/06/Deklaracja-członkowska.pdf"
          download
        >
          Deklaracja członkowska
        </a>
        <a
          href="http://febys.org/wp-content/uploads/2014/06/Statut-FeByS.pdf"
          download
        >
          Statut FeByS
        </a>
      </FilesWrapper>
    </Wrapper>
  );
};

export default Download;
