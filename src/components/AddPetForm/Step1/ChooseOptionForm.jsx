import React from 'react';
// import { FormContext } from '../AddPetForm';
import {
  FormChooseOption,
  RadioButton,
  RadioWrapper,
  Label,
} from './ChooseOptionForm.styled';
import BackgroundCard from '../BackgroundCard';
import TitleComponent from '../../TitleComponent/TitleComponent';
import StepsBlock from '../StepsBlock';
// import ButtonsBlock from '../ButtonsBlock';
import sprite from '../../../images/icons/sprite.svg';
import {
  ButtonBlue,
  ButtonWhite,
  BtnIcon,
} from '../ButtonsBlock/ButtonsBlock.styled';
// import ErrorComponent from '../ErrorComponent';

import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const stepOneValidationSchema = Yup.object().shape({
  category: Yup.string()
    .required('Choose one of the available categories')
    .oneOf(['sell', 'lost/found', 'in good hands', 'your pet']),
});

const ChooseOptionForm = props => {
  const handleSubmit = values => {
    props.next(values);
  };

  // const formProps = useContext(FormContext);
  // const {
  //   formData,
  //   handleChange,
  //   currentStep,
  //   totalSteps,
  //   nextStep,
  //   backStep,
  //   handleSubmit,
  // } = formProps;

  // const [validationError, setValidationError] = useState(false);

  // const validateForm = () => {
  //   if (formData.category === '') {
  //     setValidationError(true);
  //     return false;
  //   }
  //   return true;
  // };
  // console.log(validationError);

  // const handleNextStep = () => {
  //   const isValid = validateForm();
  //   if (isValid) {
  //     nextStep(nextStep); // Викликаємо наступний крок, якщо валідація успішна
  //   }
  // };
  return (
    <>
      <BackgroundCard>
        <TitleComponent name="Add pet" />
        <StepsBlock step={1} />
        <Formik
          validationSchema={stepOneValidationSchema}
          initialValues={props.data}
          onSubmit={handleSubmit}
        >
          {() => (
            <FormChooseOption>
              <RadioWrapper role="group" aria-labelledby="category-radio-group">
                <Label>
                  <RadioButton type="radio" name="category" value="your pet" />
                  your pet
                </Label>

                <Label>
                  <RadioButton type="radio" name="category" value="sell" />
                  sell
                </Label>

                <Label>
                  <RadioButton
                    type="radio"
                    name="category"
                    value="lost/found"
                  />
                  lost/found
                </Label>

                <Label>
                  <RadioButton
                    type="radio"
                    name="category"
                    value="in good hands"
                  />
                  in good hands
                </Label>
                <ErrorMessage name="category" />
              </RadioWrapper>

              <ButtonWhite type="button">
                <BtnIcon>
                  <use href={`${sprite}#icon-arrow-left`} />
                </BtnIcon>
                Cancel
              </ButtonWhite>
              <ButtonBlue type="submit">
                Next
                <BtnIcon>
                  <use href={`${sprite}#icon-pawprint-1`} />
                </BtnIcon>
              </ButtonBlue>
            </FormChooseOption>
          )}
        </Formik>
      </BackgroundCard>
    </>
  );
};

export default ChooseOptionForm;

//  return (
//     <>
//       <BackgroundCard>
//         <TitleComponent name="Add pet" />
//         <StepsBlock step={currentStep} />

//         <Form onSubmit={handleSubmit}>
//           <RadioWrapper role="goup" aria-labelledby="category-radio-group">
//             <Label htmlFor="yourPet">
//               <RadioButton
//                 type="radio"
//                 id="yourPet"
//                 name="category"
//                 value="your pet"
//                 onChange={handleChange}
//                 checked={formData.category === 'your pet'}
//               />
//               your pet
//             </Label>

//             <Label htmlFor="sell">
//               <RadioButton
//                 type="radio"
//                 id="sell"
//                 name="category"
//                 value="sell"
//                 onChange={handleChange}
//                 checked={formData.category === 'sell'}
//               />
//               sell
//             </Label>

//             <Label htmlFor="lostFound">
//               <RadioButton
//                 type="radio"
//                 id="lostFound"
//                 name="category"
//                 value="lost/found"
//                 onChange={handleChange}
//                 checked={formData.category === 'lost/found'}
//               />
//               lost/found
//             </Label>

//             <Label htmlFor="inGoodHands">
//               <RadioButton
//                 type="radio"
//                 id="inGoodHands"
//                 name="category"
//                 value="in good hands"
//                 onChange={handleChange}
//                 checked={formData.category === 'in good hands'}
//               />
//               in good hands
//             </Label>
//           </RadioWrapper>
//           {/* {validationError && <ErrorComponent>Error message</ErrorComponent>} */}
//         </Form>

//         <ButtonsBlock
//           currentStep={currentStep}
//           totalSteps={totalSteps}
//           nextStep={handleNextStep}
//           backStep={backStep}
//           handleSubmit={handleSubmit}
//         />
//         {/* <div>
//           <ButtonWhite>
//             <BtnIcon>
//               <use href={`${sprite}#icon-arrow-left`} />
//             </BtnIcon>
//             Cancel
//           </ButtonWhite>
//           <ButtonBlue
//             onClick={
//               validation ? (
//                 nextStep
//               ) : (
//                 <ErrorComponent>
//                   Please select at least one category
//                 </ErrorComponent>
//               )
//             }
//           >
//             Next
//             <BtnIcon>
//               <use href={`${sprite}#icon-pawprint-1`} />
//             </BtnIcon>
//           </ButtonBlue>
//         </div> */}
//       </BackgroundCard>
//     </>
//   );
// };

// export default ChooseOptionForm;