const game = ()=>{

    const introScreen = document.querySelector(".intro")
    const match = document.querySelector(".match")
    const startGame = ()=>{
        const playBtn = document.querySelector(".intro button")
        

        playBtn.addEventListener("click", ()=>{
            
            introScreen.classList.add("fadeOut")
            match.classList.add("fadeIn")
        })
    }

  
    
    const playmatch = ()=>{
        const options = document.querySelectorAll(".options button")
        const playerHand = document.querySelector(".player-hand")
        const computerHand = document.querySelector(".computer-hand")
        const playerScore = document.querySelector(".player-score p")
        const computerScore = document.querySelector(".computer-score p")
        const hands = document.querySelectorAll(".hands img")
        const menu = document.querySelector(".menu")
        const modalText = document.querySelector(".modal p")
        

        hands.forEach(hand=>{
            hand.addEventListener('animationend', function(){
                this.style.animation = ""
            })
        })

        //computers options
        const computerOptions = ["rock", "paper", "scissors"]

        menu.addEventListener("click", ()=>{
            playerScore.textContent = 0;
            computerScore.textContent = 0;

            match.classList = ""
            match.classList.add("fadeOut")
            match.classList.add("match")
            setTimeout(()=>{
                introScreen.classList = ""
                introScreen.classList.add("intro")
            },800)
        })


        options.forEach(option => {
            option.addEventListener("click", function(){
                const computerNumber = Math.floor(Math.random()*3)

                const computerChoice = computerOptions[computerNumber]
                //call compareHands function
                const playerChoice = this.textContent.toLowerCase()
                
                playerHand.style.animation = ("shakePlayer 2s ease")
                computerHand.style.animation = ("shakeComputer 2s ease")
                setTimeout(() => {
                    playerHand.src = `./asset/${playerChoice}.png`
                    computerHand.src = `./asset/${computerChoice}.png`
                    
                    const flag = compareHands(playerChoice, computerChoice)
                    
                    if(flag==1){
                        playerScore.textContent = (parseInt(playerScore.textContent)+1).toString()
                        if(playerScore.textContent=="5"){
                            const playAgain = document.querySelector(".play-again");
                            const exit = document.querySelector(".exit");
                            const modal = document.querySelector(".modal")
                            
                            modal.style.display = "flex";
                            modalText.innerHTML = "Player Won!!!"

                            
                            playAgain.onclick = ()=>{
                                playerScore.textContent = 0;
                                computerScore.textContent = 0;
                                modal.style.display = "none";
                                playerHand.src = "./asset/rock.png";
                                computerHand.src = "./asset/rock.png";
                            }

                            exit.onclick = () =>{
                                setTimeout(()=>{
                                    match.classList = ""
                                    match.classList.add("fadeOut")
                                    match.classList.add("match")
                                    setTimeout(()=>{
                                        introScreen.classList = ""
                                        introScreen.classList.add("intro")
                                        playerScore.textContent = 0;
                                        computerScore.textContent = 0;
                                    },800)
                                    modal.style.display = "none";
                                },10)
                            }
                        }
                    }
                    if(flag==0){
                        computerScore.textContent = (parseInt(computerScore.textContent)+1).toString()
                        if(computerScore.textContent=="5"){
                            const playAgain = document.querySelector(".play-again");
                            const exit = document.querySelector(".exit");
                            const modal = document.querySelector(".modal")
                            
                            modal.style.display = "flex";
                            modalText.innerHTML = "Computer Won!!!"
                            
                            playAgain.onclick = ()=>{
                                playerScore.textContent = 0;
                                computerScore.textContent = 0;
                                modal.style.display = "none";
                                playerHand.src = "./asset/rock.png";
                                computerHand.src = "./asset/rock.png";
                            }

                            exit.onclick = () =>{
                                setTimeout(()=>{
                                    match.classList = ""
                                    match.classList.add("fadeOut")
                                    match.classList.add("match")
                                    playerHand.src = "./asset/rock.png";
                                    computerHand.src = "./asset/rock.png";
                                    setTimeout(()=>{
                                        introScreen.classList = ""
                                        introScreen.classList.add("intro")
                                        playerScore.textContent = 0;
                                        computerScore.textContent = 0;
                                    },800)
                                    modal.style.display = "none";
                                },10)
                            }
                        }
                    }
                }, 2000);
                

            })
        });

        const compareHands = (playerChoice, computerChoice)=>{
            const winner = document.querySelector(".winner")
            
            if(playerChoice===computerChoice){
                winner.textContent = "its a draw";
                return 2;
            }
            if(playerChoice=="rock"){
                if(computerChoice=="paper"){
                    winner.textContent = "computer wins"
                    return 0 
                }else{
                    winner.textContent = "player wins"
                    return 1
                }
            }
            if(playerChoice=="paper"){
                if(computerChoice=="rock"){
                    winner.textContent = "player wins"
                    return 1
                }else{
                    winner.textContent = "computer wins"
                    return 0
                }
            }
            if(playerChoice=="scissors"){
                if(computerChoice=="paper"){
                    winner.textContent = "player wins"
                    return 1
                }else{
                    winner.textContent = "computer wins"
                    return 0
                }
            }
        }
    }

    
    startGame()
    playmatch()
}

game()
