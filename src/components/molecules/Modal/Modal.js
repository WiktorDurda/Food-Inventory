import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { css, keyframes } from 'styled-components';
import { Formik, Form } from 'formik';
import { addProduct as addProductAction } from '../../../actions';
import Heading from '../../atoms/Heading/Heading';
import Input from '../../atoms/Input/Input';
import Select from '../../atoms/Select/Select';
import Button from '../../atoms/Button/Button';
import categories from '../../../data/categories';
import units from '../../../data/units';

const apear = keyframes`
  from{
    opacity: 0%;
    transform: translate(-50%, -53%);
  }
  to{
    opacity: 100%;
    transform: translate(-50%, -50%);
  }
`;

const StyledBlur = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(5px);
  z-index: 9999;
`;

const StyledWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px 75px;
  border-radius: 70px;
  background-color: white;
  box-shadow: 0 8.3px 3.6px -15px rgba(0, 0, 0, 0.024), 0 18.2px 10px -15px rgba(0, 0, 0, 0.035),
    0 35px 24.1px -15px rgba(0, 0, 0, 0.046), 0 100px 80px -15px rgba(0, 0, 0, 0.07);
  animation: ${apear} 0.3s ease;
`;

const StyledButton = styled(Button)`
  margin: 70px 0 0 30px;
`;

const StyledFlex = styled.div`
  display: flex;

  ${({ flexEnd }) =>
    flexEnd &&
    css`
      justify-content: flex-end;
    `}
`;

const Modal = ({ closeModalFn, addProduct, modalType }) => (
  <>
    <StyledBlur>
      <StyledWrapper>
        {modalType === 'INVENTORY' ? (
          <Heading>Add product to inventory</Heading>
        ) : (
          <Heading>Add product to shop list</Heading>
        )}
        {/* <Heading>Add product to inventory</Heading> */}
        <Formik
          initialValues={{ name: '', category: '', amount: '', unit: '', minAmount: '' }}
          onSubmit={(values) => {
            addProduct(values.category, values, modalType);
            closeModalFn();
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <Input
                inputName="Product name"
                name="name"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <Select
                selectName="Category"
                name="category"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.category}
                width="200px"
              >
                {categories.map((category) => (
                  <option value={category.name}>{category.name}</option>
                ))}
              </Select>
              <StyledFlex>
                <Input
                  inputName="Amount"
                  name="amount"
                  type="number"
                  width="200px"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.amount}
                />
                <Select
                  selectName="Unit"
                  name="unit"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.unit}
                  width="100px"
                  margin="0 0 70px 50px"
                >
                  {units.map((unit) => (
                    <option value={unit}>{unit}</option>
                  ))}
                </Select>
              </StyledFlex>
              <Input
                inputName="Minimal amount"
                name="minAmount"
                type="number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.minAmount}
                width="200px"
              />
              <StyledFlex flexEnd>
                <StyledButton type="submit" disabled={isSubmitting}>
                  Add
                </StyledButton>
                <StyledButton negative onClick={closeModalFn}>
                  Cancel
                </StyledButton>
              </StyledFlex>
            </Form>
          )}
        </Formik>
      </StyledWrapper>
    </StyledBlur>
  </>
);

const mapDispatchToProps = (dispatch) => ({
  addProduct: (productCategory, productContent, modalType) =>
    dispatch(addProductAction(productCategory, productContent, modalType)),
});

Modal.propTypes = {
  closeModalFn: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
  modalType: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(Modal);
