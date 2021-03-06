import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"

const Page = styled.main`
  width: 90vw;
  max-width: var(--max-width);
  margin: 0 auto;
  min-height: calc(100vh - (6rem + 4rem));
`

const ContactPage = styled.section`
  display: grid;
  gap: 2rem 3rem;
  padding-bottom: 3rem;

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`

const ContactInfo = styled.article``

const Form = styled.form`
  width: 100%;
  background: white;
  border-radius: 0.25rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 2rem 2.5rem;
`

const FormRow = styled.div`
  margin-bottom: 1rem;
`

const FeaturedRecipes = styled.section`
  h5 {
    text-align: center;
    max-width: 100%;
  }
`

const Button = styled.button.attrs(props => ({
  type: "",
}))`
  cursor: pointer;
  appearance: none;
  color: white;
  background: #645cff;
  border: none;
  border-radius: 0.25rem;
  letter-spacing: 1px;
  padding: 0.375rem 0.75rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: 0.3s ease-in-out all;
  text-transform: capitalize;

  :hover {
    color: var(--white);
    background: var(--primary-700);
    box-shadow: var(--shadow-2);
  }
`

const BtnBlock = styled(Button)`
  width: 100%;
`

const Contact = () => {
  return (
    <Layout>
      <Page>
        <ContactPage>
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Four dollar toast biodiesel plaid salvia actually pickled banjo
              bespoke mlkshk intelligentsia edison bulb synth.
            </p>
            <p>Cardigan prism bicycle rights put a bird on it deep v.</p>
            <p>
              Hashtag swag health goth air plant, raclette listicle fingerstache
              cold-pressed fanny pack bicycle rights cardigan poke.
            </p>
          </article>
          <article>
            <Form>
              <FormRow>
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </FormRow>
              <FormRow>
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </FormRow>
              <FormRow>
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </FormRow>
              <BtnBlock type="submit">submit</BtnBlock>
            </Form>
          </article>
        </ContactPage>
        <FeaturedRecipes>
          <h5>Look at this Awesomesouce!</h5>
        </FeaturedRecipes>
      </Page>
    </Layout>
  )
}

export default Contact
