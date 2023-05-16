import { useState } from "react";
import PropTypes from "prop-types";
import ResidentCard from "../ResidentCard/ResidentCard";

// Paginación
// Dividir en grupos mas pequeños una lista de elementos
// Por lo tanto minimamente se necesitan dos datos: la lista y la cantidad de de elementos que debe tener cada grupo.

//  0 1 2 3 4 5 6 7 8 9
// [1,2,3,4,5,6,7,8,9,10]

// Paginar en grupos de 3

// 0 = 3 x 0 = 3 x (1 - 1)
//     2 = 3 - 1 = (3 x 1) - 1
// [,1,2,3] -> Pagina 1

// 3 = 3 x 1 = 3 x (2 - 1)
//     5 = 6 - 1 = (3 x 2) - 1
// [4,5,6] -> Pagina 2

// 6 = 3 x 2 = 3 x (3 - 1)
//     8 = 9 - 1  = (3 x 3) - 1
// [7,8,9] -> Pagina 3

// 9 = 3 x 3 = 3 x (4 - 3)
//     11 = 12 - 1 = (3 x 4) - 1
// [10,?,?] -> Pagina 4

// limiteInferior = quantity * (numberPage - 1)
// limiteSuperior = quantity * numberPage - 1

const ResidentList = ({ residents = [] }) => {
  const [quantityPagination, setQuantityPagination] = useState(6);
  const [numberPage, setNumberPage] = useState(1);

  const lowerLimit = quantityPagination * (numberPage - 1);
  const upperLimit = quantityPagination * numberPage - 1;
  const totalPages = Math.ceil(residents.length / quantityPagination);

  const residentSlice = residents.slice(lowerLimit, upperLimit + 1);

  const changePageTo = (page) => {
    if (page > totalPages) setNumberPage(totalPages);
    else if (page < 1) setNumberPage(1);
    else setNumberPage(page);
  };

  // const getPageButtons = () => {
  //   const buttons = [];

  //   for (let i= 1; i <= totalPages; i++) {
  //     const button = <button onClick={() => changePageTo(i)}>{i}</button>;

  //     buttons.push(button);
  //   }

  //   return buttons;
  // };

  return (
    <>
    <div>
        <button onClick={() => changePageTo(numberPage - 1)}>Back</button>
        {/* {getPageButtons()} */}
        {  }
        <button onClick={() => changePageTo(numberPage + 1)}>Next</button>
      </div>

      {!residentSlice.length && <p>No hay residents en esta ubicación</p>}

      {Boolean(residentSlice.length) && (
        <ul>
          {residentSlice.map((residentUrl) => (
            <li key={residentUrl}>
              <ResidentCard url={residentUrl} />
            </li>
          ))}
          ;
        </ul>
      )}

    </>
  );
};

ResidentList.propTypes = {
  residents: PropTypes.array,
};

export default ResidentList;
