import React, { useState, useEffect } from "react";
import "../styles/superF.css";
import shoesActions from "../redux/actions/shoesActions";
import { useDispatch } from 'react-redux';
import { Link as LinkRouter } from 'react-router-dom';

function SuperF() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  //const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState([]);

  const [reload, setReload] = useState(false);
  const [getShoes, setGetShoes] = useState([]);
  const [shoesFinal, setShoesFinal] = useState();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(shoesActions.getShoes())
      .then(res => setGetShoes(res.data.response))
    // eslint-disable-next-line
  }, [reload])


  const shoesIdeal = async (data) => {

    const typeId = data[0].isCorrect.id
    const brandId = data[1].isCorrect.id
    const priceId = data[2].isCorrect.id

    const shoesType = getShoes.filter(shoe => shoe.type._id === typeId)
    const shoesBrand = shoesType.filter(shoe => shoe.brand._id === brandId)

    if (priceId === 0) {
      shoesBrand.sort((a, b) => b.price - a.price)
    }
    else {
      shoesBrand.sort((a, b) => a.price - b.price)
    }
    //console.log("🚀 ~ file: superF.JSX ~ line 32 ~ shoesIdeal ~ shoesType", shoesBrand)
    if (shoesBrand.length !== 0) {
      setShoesFinal(shoesBrand[0])
      console.log(shoesBrand)
      //console.log("tu zapatilla ideal es: ", shoesFinal)
    }
    else {
      setShoesFinal("")
      console.log("no encontramos coincidencias")
    }
    setReload(!reload)
  };

  const questions = [
    {
      text: "Con que estilo te sentis mas identificado?",
      options: [
        { id: "62d81e84db36588e63203de7", text: "Urban", isCorrect: true },
        { id: "62d827534fca1cb3de1808b1", text: "Sport", isCorrect: true },
        { id: "62d828964fca1cb3de1808bd", text: "Fancy", isCorrect: true },
        //{ id: 3, text: "Washington DC", isCorrect: true },
      ],
    },
    {
      text: "Tenes preferencia en alguna marca?",
      options: [
        { id: "62d836532f6e1f16ca3df337", text: "Nike", isCorrect: true },
        { id: "62d838004fca1cb3de1808cb", text: "Adidas", isCorrect: false },
        { id: "62d8392a4fca1cb3de1808cd", text: "Jordan", isCorrect: false },
        { id: "62d839d04fca1cb3de1808ce", text: "New", isCorrect: false },
        { id: "62d83a704fca1cb3de1808cf", text: "Asics", isCorrect: true },
        { id: "62d83b334fca1cb3de1808d1", text: "Balenciaga", isCorrect: false },
        { id: "62d83c814fca1cb3de1808d6", text: "Dior", isCorrect: false },
        { id: "62d83e2d4fca1cb3de1808da", text: "Louis", isCorrect: false },
      ],
    },
    {
      text: "Cuanta plata gastarias?",
      options: [
        { id: 0, text: "No me importa la plata", isCorrect: true },
        { id: 1, text: "cuida mi bolsillo", isCorrect: false },

      ],
    },
    {
      text: "Que color te gusta mas?",
      options: [
        { id: 0, text: "Blanco", isCorrect: true },
        { id: 1, text: "Negro", isCorrect: true },
        { id: 2, text: "Naranja", isCorrect: false },
        { id: 3, text: "Verde", isCorrect: false },
      ],
    },

  ];

  const optionClicked = (isCorrect) => {
    setAnswer([...answer, { isCorrect }])
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
      shoesIdeal(answer)
      //console.log(answer)
    }
  };

  const restartGame = () => {
    setAnswer([])
    //setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="containerSuperF">
      
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1 className="mb-8 text-lg">Final Results</h1>
          {shoesFinal ?
            (<div className="wrapper">
              <div className="card">

                <div className="front">
                  {
                    shoesFinal.brand ?
                      <h1>{shoesFinal.brand.name}</h1>
                      : null
                  }
                  {
                    shoesFinal.type ?
                      <h1>{shoesFinal.type.name}</h1>
                      : null
                  }

                  {/* <h1>{shoesFinal?.type.name}</h1> */}
                  <p>{shoesFinal.name}</p>
                  <h2 className="price">U$S {shoesFinal.price}</h2>
                </div>

                <div className="right">
                  <h2>{shoesFinal.brand.name}</h2>
                  <p>{shoesFinal.name}</p>
                  <h2 className="price">U$S {shoesFinal.price}</h2>

                  <LinkRouter to={`/details/${shoesFinal._id}`} >
                    <button>Detail</button>
                  </LinkRouter>

                </div>

              </div>
              <div className="img-wrapper">
                <img src={shoesFinal.image[0]} alt={shoesFinal.name} />
              </div>
            </div>)
            : <h1>No hay resultados</h1>
          }
          
          <button onClick={() => restartGame()}>Restart</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul className="ulSuperF">
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SuperF;