import "../../Assets/Styles/Css/aboutMe.css";
import Foto1 from "../../Assets/Img/foto1.jpg";
import Pais from "../../Assets/Img/pais.jpg";
import Foto2 from "../../Assets/Img/foto2.jpg";
import Familia from "../../Assets/Img/familia.jpeg";
import { useState } from "react";
import Music from "../../Assets/Media/Home2.mp3";

const AboutMe = () => {
    const [isVisibleOne, setIsVisibleOne] = useState(true);
    const [isVisibleTwo, setIsVisibleTwo] = useState(false);
    const [isVisibleThree, setIsVisibleThree] = useState(false);
    const [isVisibleFour, setIsVisibleFour] = useState(false);

    const handleClickOne = () => {
        setIsVisibleOne(true);
        setIsVisibleTwo(false);
        setIsVisibleThree(false)
        setIsVisibleFour(false)
    }

    const handleClickTwo = () => {
        setIsVisibleOne(true);
        setIsVisibleTwo(true);
        setIsVisibleThree(false)
        setIsVisibleFour(false)
    }
    const handleClickThree = () => {
        setIsVisibleOne(true);
        setIsVisibleTwo(true);
        setIsVisibleThree(true)
        setIsVisibleFour(false)
    }
    const handleClickFour = () => {
        setIsVisibleOne(true);
        setIsVisibleTwo(true);
        setIsVisibleThree(true)
        setIsVisibleFour(true)
    }


    return (
        <div className="container--about">
            <header className="about-title">
                <h2>Um pouquinho sobre mim.</h2>
            </header>
            <audio src={Music} autoPlay controls muted loop></audio>
            <nav className="about--circle-btn">
                <ul className="">
                    <li>
                        <button className={isVisibleOne ? "clicleTrue" : null}
                            onClick={handleClickOne}>&nbsp;</button>
                    </li>
                    <li>
                        <button className={isVisibleTwo ? "clicleTrue" : null}
                            onClick={handleClickTwo}>&nbsp;</button>
                    </li>
                    <li>
                        <button className={isVisibleThree ? "clicleTrue" : null}
                            onClick={handleClickThree}>&nbsp;</button>
                    </li>
                    <li>
                        <button className={isVisibleFour ? "clicleTrue" : null}
                            onClick={handleClickFour}>&nbsp;</button>
                    </li>
                </ul>
            </nav>
            <section className="about-info">
                {/* verificando a primeira foto */}
                {isVisibleOne === true && isVisibleTwo === false && isVisibleThree === false && isVisibleFour === false ?
                    (<div className="info1">
                        <p>
                            Meu nome ?? <span>Mois??s Alex</span> tenho 26 anos sou natural de Goi??nia. Nascido e criado na terra do sertanejo desde pequeno ouvindo modas de viola nas festas de fam??lia, mas acredito que n??o deu muito certo, pois gosto mesmo ?? de um bom (Dark blues/Rock ) deixo a moda de viola e o sertanejo para garotada.??Quando jovem queria viajar o mundo, conhece lugares lindos que s?? observamos na Tv. Como a capital do pequi ?? muito quente sempre sonhei em conhecer o frio de fato, conhecer neve, fazer bonecos de neve, anjos de neve.
                            <span> OBS: Sou o de camisa cinza.</span>
                        </p>
                        <figure>
                            <img src={Foto1} alt="Mois??s Alex" />
                            <figcaption>Mascarados de Piren??polis</figcaption>

                        </figure>
                    </div>) : null}
                {/* verificando a segunda foto  */}
                {isVisibleOne === true && isVisibleTwo === true && isVisibleThree === false && isVisibleFour === false ?
                    (
                        <>
                            <div className="info1">
                                <p>
                                    Meu nome ?? <span>Mois??s Alex</span> tenho 26 anos sou natural de Goi??nia. Nascido e criado na terra do sertanejo desde pequeno ouvindo modas de viola nas festas de fam??lia, mas acredito que n??o deu muito certo, pois gosto mesmo ?? de um bom (Rock and Roll) deixo a moda de viola e o sertanejo para garotada.??Quando jovem queria viajar o mundo, conhece lugares lindos que s?? observamos na Tv. Como a capital do pequi ?? muito quente sempre sonhei em conhecer o frio de fato, conhecer neve, fazer bonecos de neve, anjos de neve.
                                    <span> OBS: Sou o de camisa cinza.</span>
                                </p>
                                <figure>
                                    <img src={Foto1} alt="Mois??s Alex" />
                                    <figcaption>Mascarados de Piren??polis</figcaption>

                                </figure>
                            </div>
                            <div className="info2">
                                <p>
                                    Em 2015 perdi minha base, minhas pernas, minha vida.
                                    Meu pai foi um homem incr??vel, que sempre me ajudou a questionar as regras de tudo, sempre me fez pensar nos ??nus e b??nus das a????es. Fui criado com di??logo, sempre que fazia algo errado nos convers??vamos sobre o ocorrido, se um dia for metade do homem que ele foi seria um bom exemplo para minha fam??lia.
                                    Minha m??e, um doce mulher, acho que nunca vi ela dizer n??o a ningu??m, sempre tentando ajudar a todos. Lembro que uma vez perguntei-lhe o que ela gostaria de ter quando era crian??a, ela me disse que era ter uma geladeira para poder ver gelo. N??o consigo imaginar como foi dif??cil sua inf??ncia.
                                    Sou o filho mais novo, fui adotado com 3 meses de vida, e sim fui muito bajulado.
                                </p>
                                <figure>
                                    <img src={Pais} alt="Meu pai e minha mae" />
                                    <figcaption>Papai e Mam??e.</figcaption>
                                </figure>
                            </div>
                        </>

                    ) : null}
                {/* verificando a terceira foto  */}
                {isVisibleOne === true && isVisibleTwo === true && isVisibleThree === true && isVisibleFour === false ?
                    (<>
                        <div className="info1">
                            <p>
                                Meu nome ?? <span>Mois??s Alex</span> tenho 26 anos sou natural de Goi??nia. Nascido e criado na terra do sertanejo desde pequeno ouvindo modas de viola nas festas de fam??lia, mas acredito que n??o deu muito certo, pois gosto mesmo ?? de um bom (Rock and Roll) deixo a moda de viola e o sertanejo para garotada.??Quando jovem queria viajar o mundo, conhece lugares lindos que s?? observamos na Tv. Como a capital do pequi ?? muito quente sempre sonhei em conhecer o frio de fato, conhecer neve, fazer bonecos de neve, anjos de neve.
                                <span> OBS: Sou o de camisa cinza.</span>
                            </p>
                            <figure>
                                <img src={Foto1} alt="Mois??s Alex" />
                                <figcaption>Mascarados de Piren??polis</figcaption>

                            </figure>
                        </div>
                        <div className="info2">
                            <p>
                                Em 2015 perdi minha base, minhas pernas, minha vida.
                                Meu pai foi um homem incr??vel, que sempre me ajudou a questionar as regras de tudo, sempre me fez pensar nos ??nus e b??nus das a????es. Fui criado com di??logo, sempre que fazia algo errado nos convers??vamos sobre o ocorrido, se um dia for metade do homem que ele foi seria um bom exemplo para minha fam??lia.
                                Minha m??e, um doce mulher, acho que nunca vi ela dizer n??o a ningu??m, sempre tentando ajudar a todos. Lembro que uma vez perguntei-lhe o que ela gostaria de ter quando era crian??a, ela me disse que era ter uma geladeira para poder ver gelo. N??o consigo imaginar como foi dif??cil sua inf??ncia.
                                Sou o filho mais novo, fui adotado com 3 meses de vida, e sim fui muito bajulado.
                            </p>
                            <figure>
                                <img src={Pais} alt="Meu pai e minha mae" />
                                <figcaption>Papai e Mam??e.</figcaption>
                            </figure>
                        </div>
                        <div className="info1">
                            <p>Em 2016 conseguir fazer primeira viagem fora do pa??s, era um sonho sendo realizado. Passei por Foz do Igua??u(PR), C??rdoba(AR) e Santiago(CL).
                                Conseguir ver neve pela primeira vez e pensei comigo mesmo ("M??e, ?? muito gelado"). Foi uma experi??ncia incr??vel, o contato com outras culturas al??m da nossa ajuda a ver tudo diferente e quando voltei para o Brasil coloquei na cabe??a que vou seguir meus sonhos.</p>
                            <figure>
                                <img src={Foto2} alt="Puente del Inca na Argentina." />
                                <figcaption>Puente del Inca na Argentina.</figcaption>
                            </figure>
                        </div>
                    </>
                    ) : null}
                {/* verificando a quarta foto  */}
                {isVisibleOne === true && isVisibleTwo === true && isVisibleThree === true && isVisibleFour === true ?
                    (<>
                        <div className="info1">
                            <p>
                                Meu nome ?? <span>Mois??s Alex</span> tenho 26 anos sou natural de Goi??nia. Nascido e criado na terra do sertanejo desde pequeno ouvindo modas de viola nas festas de fam??lia, mas acredito que n??o deu muito certo, pois gosto mesmo ?? de um bom (Rock and Roll) deixo a moda de viola e o sertanejo para garotada.??Quando jovem queria viajar o mundo, conhece lugares lindos que s?? observamos na Tv. Como a capital do pequi ?? muito quente sempre sonhei em conhecer o frio de fato, conhecer neve, fazer bonecos de neve, anjos de neve.
                                <span> OBS: Sou o de camisa cinza.</span>
                            </p>
                            <figure>
                                <img src={Foto1} alt="Mois??s Alex" />
                                <figcaption>Mascarados de Piren??polis</figcaption>

                            </figure>
                        </div>
                        <div className="info2">
                            <p>
                                Em 2015 perdi minha base, minhas pernas, minha vida.
                                Meu pai foi um homem incr??vel, que sempre me ajudou a questionar as regras de tudo, sempre me fez pensar nos ??nus e b??nus das a????es. Fui criado com di??logo, sempre que fazia algo errado nos convers??vamos sobre o ocorrido, se um dia for metade do homem que ele foi seria um bom exemplo para minha fam??lia.
                                Minha m??e, um doce mulher, acho que nunca vi ela dizer n??o a ningu??m, sempre tentando ajudar a todos. Lembro que uma vez perguntei-lhe o que ela gostaria de ter quando era crian??a, ela me disse que era ter uma geladeira para poder ver gelo. N??o consigo imaginar como foi dif??cil sua inf??ncia.
                                Sou o filho mais novo, fui adotado com 3 meses de vida, e sim fui muito bajulado.
                            </p>
                            <figure>
                                <img src={Pais} alt="Meu pai e minha mae" />
                                <figcaption>Papai e Mam??e.</figcaption>
                            </figure>
                        </div>
                        <div className="info1">
                            <p>Em 2016 conseguir fazer primeira viagem fora do pa??s, era um sonho sendo realizado. Passei por Foz do Igua??u(PR), C??rdoba(AR) e Santiago(CL).
                                Conseguir ver neve pela primeira vez e pensei comigo mesmo ("M??e, ?? muito gelado"). Foi uma experi??ncia incr??vel, o contato com outras culturas al??m da nossa ajuda a ver tudo diferente e quando voltei para o Brasil coloquei na cabe??a que vou seguir meus sonhos.</p>
                            <figure>
                                <img src={Foto2} alt="Puente del Inca na Argentina." />
                                <figcaption>Puente del Inca na Argentina.</figcaption>
                            </figure>
                        </div>

                        <div className="info2">
                            <p>Em 2017 larguei tudo em Goi??nia??e vim sozinho para Curitiba a cidade que na sombra congela e no sol torramos e foi quando fiz meu primeiro curso livre de TI (Introdu????o a programa????o), por??m como tinha que trabalhar em dois empregos desviei dos estudos e foquei no trabalho. Minha rainha, minha esposa, meu amor sempre acreditou em mim, isso me fez a sonhar novamente. Em 2021??comecei a estruturar os planos de estudo novamente e hoje sou aluno da Kenzie Academy Brasil no curso de Front End e graduando pela Universidade Est??cio de S?? em an??lise e desenvolvimento de sistema.
                            </p>
                            <figure>
                                <img src={Familia} alt="Minha Fam??lia" />
                                <figcaption>Eu, a Patroa e as Crian??as</figcaption>
                            </figure>
                        </div>
                    </>
                    ) : null}
            </section>
            <footer>
                <p>Sobre os ombros de gigantes</p>
            </footer>
        </div>
    )


}
export default AboutMe