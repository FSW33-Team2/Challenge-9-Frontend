import React, { useState, useEffect } from "react";
import axios from "../lib/axios";
import "../../assets/css/RpcGame.css";
import back from "../../assets/RpcGameImage/back.svg";
import rock from "../../assets/RpcGameImage/rock.png";
import paper from "../../assets/RpcGameImage/paper.png";
import scissors from "../../assets/RpcGameImage/scissors.png";
import logo from "../../assets/RpcGameImage/logo.png";
import refreshImage from "../../assets/RpcGameImage/refresh.png";
import {Link, useParams } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const choices = ['rock', 'paper', 'scissors'];

export default function RpcGame( {onRefresh}) {

  //scalling page
  const scaleValue = 1;

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Set showModal to true when component is mounted
    setShowModal(true);
  }, []); // Empty dependency array ensures this effect runs only once

  const handleCloseModal = () => {
    setShowModal(false);
  };


  // game logic
  const {id} = useParams();
  const {gameId} = useParams();
  const [score, setScore] = useState()

  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const [gameOver, setGameOver] = useState(false);

  const getRandomChoice = () => choices[Math.floor(Math.random() * choices.length)];

  const determineWinner = (user, computer) => {
    if (user === computer) return "draw";
    if (
      (user === 'rock' && computer === 'scissors') ||
      (user === 'paper' && computer === 'rock') ||
      (user === 'scissors' && computer === 'paper')
    ) {
      return 'win';
    } else {
      return 'lose';
    }
  };

  useEffect(() => {
    const CreateScore = async () => {
      try {
        const CreateScoreRouter = await axios.post(`api/score/${gameId}/${id}`, { score: score });
        if (CreateScoreRouter.status !== 200) {
          console.log("Save data has failed");
        } else {
          console.log("Save data has success");
        }
        onRefresh();
      } catch (err) {
        alert("Something went wrong");
      }
    };

    if (gameOver) {
      CreateScore();
    }
  }, [gameOver, score, gameId, id]);

  const handleChoice = (choice) => {
    if (!gameOver) {
      const computer = getRandomChoice();
      const result = determineWinner(choice, computer);

      setUserChoice(choice);
      setComputerChoice(computer);
      setResult(result);
      setGameOver(true);

      if (result === "win") {
        setScore(1)
      } else {
        setScore(0)
      } 

  };
}

  const handleRefresh = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult('');
    setGameOver(false);
  };
  // routing 
  

  return (
<>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'20px'}}>
<div style={{ transform: `scale(${scaleValue})` }}>
  <header className="d-flex align-items-center mt-3">
      <Link to="/gamelist">
        <img className="back" src={back} alt="Back Button"/>
      </Link>
      <img className="mx-4" src={logo} alt="Logo"/>
      <h1 className="fw-bold m-0">ROCK PAPER SCISSORS</h1>
  </header>
  <div className="main-content d-flex flex-row justify-content-center">
    <div className="player d-flex flex-column align-items-center">
      <h1 className="d-flex fw-bold">PLAYER 1</h1>
      <button onClick={() => handleChoice('rock')} id="p-rock" className={userChoice === 'rock' ? 'selected' : ''}>
        <img className="rock grow" src={rock} alt="rock" />
      </button>
      <button onClick={() => handleChoice('paper')} id="p-paper" className={userChoice === 'paper' ? 'selected' : ''}>
        <img  className="paper grow" src={paper} alt="paper" />
      </button>
      <button onClick={() => handleChoice('scissors')} id="p-scissors" className={userChoice === 'scissors' ? 'selected' : ''}>
        <img className="scissors grow" src={scissors} alt="scissors" />
      </button>
    </div>
    <div className="vs-container d-flex">
      <div id="vs" className="vs fw-bold" style={{ display: result === "" ? 'flex' : 'none' }}>
        VS
        </div>
      <div id="p-win" className="p-win fw-bold" style={{ display: result === "win" ? 'flex' : 'none' }}>PLAYER 1 WIN</div>
      <div id="com-win" className="com-win fw-bold" style={{ display: result === "lose" ? 'flex' : 'none' }}>COM WIN</div>
      <div id="draw" className="draw fw-bold" style={{ display: result === "draw" ? 'flex' : 'none' }}>DRAW</div>

    </div>
    <div className="computer d-flex flex-column align-items-center">
      <h1 className="d-flex fw-bold">COM</h1>
      <button className={computerChoice === 'rock' ? 'selected' : ''} id="com-rock">
        <img className="rock" src={rock} alt="rock" />
      </button>
      <button id="com-paper" className={computerChoice === 'paper' ? 'selected' : ''}>
        <img  className="paper" src={paper} alt="paper" />
      </button>
      <button id="com-scissors" className={computerChoice === 'scissors' ? 'selected' : ''}>
        <img className="scissors" src={scissors} alt="scissors" />
      </button>
    </div>
  </div>
  <div className="d-flex justify-content-center" onClick={handleRefresh}>
    <img id="refresh" className="refresh" src={refreshImage} alt="refresh" />
  </div>
  </div>
  </div>
    {/* Modal */}
    <Modal show={showModal} onHide={handleCloseModal} centered style={{background: 'black'}}>
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', background: 'black', color: 'goldenrod', textAlign: 'center' }}>
        <Modal.Header style={{ justifyContent: 'center', fontSize: '35px' }}>
          <Modal.Title style={{ textAlign: 'center', fontSize: '35px' }}>GUNTING BATU KERTAS</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: 'justify', fontSize: '25px'}}>
        Batu digambarkan oleh tangan mengepal, gunting digambarkan oleh jari telunjuk dan tengah, kertas digambarkan oleh tangan terbuka. Tujuan dari permainan adalah mengalahkan lawan bermain. Aturan standar adalah batu mengalahkan gunting, gunting mengalahkan kertas, dan kertas mengalahkan batu.
        <br />
        <br />
        Mainkan gamenya untuk pengalaman terbaik!!
        <br />
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: "center" }}>
        <Button variant="outline-warning" onClick={handleCloseModal} style={{ padding: '15px 30px', fontSize: '20px' }}>
            Mainkan Game
          </Button>
        </Modal.Footer>
        </div>
      </Modal>
      </>
  );
}
