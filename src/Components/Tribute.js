import React from "react";
import {Container, Row, Col, Button, Card, Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMobileAlt } from "@fortawesome/free-solid-svg-icons";

const Tribute = () => (
  <div>
    <Container className='heading' fluid>
      <h1> Sojourner Truth </h1>
      <h5> "Ain't I a Woman." </h5>
    </Container>
    <Container className='hero-image'>
      <img
        src="/img/sojourner-truth.jpg" alt="Soujouner"
      />
      <h5>Sojourner Truth was born a slave but she escaped slavery in 1826. She became a supporter of both women's
          rights and abolition, or the fight to end slavery.</h5>
    </Container>
    <Container className="description">
      <div className="heading">
        <h3>Here's a timeline of Sojourner Truth's life:</h3>
      </div>
      <ul className='timeline'>
        <li>
          <b><em>1797</em></b> - Sojourner Truth is born with the name Isabella Baumfree in New York in 1792. Her exact date of
          birth is not known because she was a slave and close records were not kept on the birthdays of slaves.
        </li>
        <li>
          <b><em>1806</em></b> - At the age of 9, Sojourner is sold at an auction to John Neely because her previous owner died.
          She is sold for $100, but the price includes a flock of sheep.
        </li>
        <li>
          <b><em>1808</em></b> - Sojourner Truth is sold again, this time to Martinus Schryver for $105. She would be sold a third
          time two years later.
        </li>
        <li>
          <b><em>1815</em></b> - Sojourner falls in love with a slave named Robert. She wanted to marry him, but Robert's owner
          would not allow it because he did not want Sojourner to have children he could not own.
        </li>
        <li>
          <b><em>1817</em></b> - Thomas Dumont, Sojourner Truth's owner, forces her to marry a man named Robert. He is a slave on
          another plantation and they have five children together.
        </li>
        <li>
          <b><em>1826</em></b> - After Dumont does not keep his promise to free her, Sojourner escapes and takes her daughter, Sophia
          with her. Later she sues Dumont and her son, Peter, is returned to her because he was illegally sold to another owner.
        </li>
        <li>
          <b><em>1828</em></b> -Sojourner Truth and Peter move to New York City and live with family with the last name of Grear. She
          earns a living being a maid.
        </li>
        <li>
          <b><em>1843</em></b> - Saying she is "called in spirit, Isabella Baumfree changes her name to Sojourner Truth. She begins to
          travel around the East Coast and meets several abolitionists, including Frederick Douglass and William Lloyd Garrison.
        </li>
        <li>
          <b><em>1846</em></b> - Sojourner is so influenced by the abolitionists that she meets, she devotes her life to ending slavery.
          She begins to give lectures around the country and people gather to listen to her stories about slavery.
        </li>
        <li>
          <b><em>1850</em></b> - Even though she cannot read or write, Sojourner's autobiography is published, thanks to the help of a
          friend that wrote her story for her. She makes enough money from the sale of her book to buy a home in Massachusetts.
        </li>
        <li>
          <b><em>1851</em></b> - Now a supporter of women's rights, Sojourner attends the first Women's Rights Convention in Akron, Ohio.
          She gives a very popular speech that has come to be known as "Ain't I a Woman," even though she never said that phrase.
        </li>
        <li>
          <b><em>1857</em></b> - Sojourner Truth moves to Battle Creek, Michigan and buys a barn that she turns into her house. She lives
          there for the rest of her life, but continues to travel and give speeches on behalf of women's rights and the end of slavery.
        </li>
        <li>
          <b><em>1864</em></b> - After the Civil War ended, the Freedman's Bureau was created to help ex-slaves create new lives as free
          men and women. Sojourner is asked to go to Washington, D.C. to help work with the bureau and she meets President Abraham Lincoln
          at least once.
        </li>
        <li>
          <b><em>1867</em></b> - With so many ex-slaves suffering from poverty, Sojourner creates a new program to try and help create
          jobs for them. She asks Congress to give them land in the West that they can live on and farm, but Congress rejects the idea.
        </li>
        <li>
          <b><em>1883</em></b> - Sojourner develops an infection from sores on her legs and is treated at the famous Battle Creek Sanitarium
          by Dr. John Harvey Kellogg. The treatment does not work and Sojourner dies at her home
        </li>
      </ul>
      <p className='quote'><em>"Life is a hard battle anyway. If we laugh and sing a little as we fight the good fight of freedom, it makes
      it all go easier. I will not allow my life's light to be determined by the darkness around me."</em>
      </p>
      <p className='quote'>-- Sajourner Truth </p>
      <div className="heading">
        <h3>If you have time, you should read more about this incredible human being on her <a href="https://en.wikipedia.org/wiki/Sojourner_Truth">
        Wikipedia entry</a>.</h3>
      </div>
    </Container>
  </div>
);

export default Tribute;
