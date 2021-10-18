import React from 'react';
import './Comunicates.css';
import { DropdownButton, Dropdown } from 'react-bootstrap'

const Comunicates = (props) => {
    return (
        <div className="row">
            <div className="column">
                <h2>COMUNICADOS</h2>
                <div id="box">
                    {props.text1 !== '' ?
                        <p className="comunicados">1.- {props.text1}</p>
                        : null
                    }
                    {props.text2 !== '' ?
                        <p className="comunicados">2.- {props.text2}</p>
                        : null
                    }
                    {props.text3 !== '' ?
                        <p className="comunicados">3.- {props.text3}</p>
                        : null
                    }
                    {props.text4 !== '' ?
                        <p className="comunicados">4.- {props.text4}</p>
                        : null
                    }
                </div>
            </div>
            <div className="column">
                <h2>ARCHIVOS</h2>
                <div className="row" id="archivos">
                    <div className="column">
                        <DropdownButton id="boton" title="Calendarios" variant="secondary" size="lg">
                            <Dropdown.Item href="#/pdf" id="boton" onClick={() => props.pdfClickHandler('CalendarioTurnos')}>Calendario turnos</Dropdown.Item>
                            <Dropdown.Item href="#/pdf" id="boton" onClick={() => props.pdfClickHandler('CalendarioPartida')}>Calendario partida</Dropdown.Item>
                            <Dropdown.Item href="#/pdf" id="boton" onClick={() => props.pdfClickHandler('CalendarioA')}>Calendario 4º turno A</Dropdown.Item>
                            <Dropdown.Item href="#/pdf" id="boton" onClick={() => props.pdfClickHandler('CalendarioB')}>Calendario 4º turno B</Dropdown.Item>
                            <Dropdown.Item href="#/pdf" id="boton" onClick={() => props.pdfClickHandler('CalendarioC')}>Calendario 4º turno C</Dropdown.Item>
                            <Dropdown.Item href="#/pdf" id="boton" onClick={() => props.pdfClickHandler('CalendarioD')}>Calendario 4º turno D</Dropdown.Item>
                        </DropdownButton>
                        <button type="button" id="boton" className="btn btn-secondary btn-lg" onClick={() => props.pdfClickHandler('COVID-19')}>COVID-19</button>
                        <DropdownButton id="boton" title="Plan de evacuación" variant="secondary" size="lg">
                            <Dropdown.Item href="#/pdf" id="boton" onClick={() => props.pdfClickHandler('PlanEvacuacion')}>Plan de evacuación</Dropdown.Item>
                            <Dropdown.Item href="#/pdf" id="boton" onClick={() => props.pdfClickHandler('LayoutBomberos')}>Layout para bomberos</Dropdown.Item>
                            <Dropdown.Item href="#/pdf" id="boton" onClick={() => props.pdfClickHandler('PuntosCorte')}>Puntos de corte</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div className="column">
                        <button type="button" id="boton" className="btn btn-secondary btn-lg" onClick={() => props.pdfClickHandler('Telefonos')}>Listado de teléfonos</button>
                        <DropdownButton id="boton" title="PRL" variant="secondary" size="lg">
                            <Dropdown.Item href="#/pdf" id="boton" onClick={() => props.pdfClickHandler('ActuacionEmergencia')}>Actuación emergencia</Dropdown.Item>
                            <Dropdown.Item href="#/pdf" id="boton" onClick={() => props.pdfClickHandler('NormasErgonomicas')}>Normas ergonómicas</Dropdown.Item>
                            <Dropdown.Item href="#/pdf" id="boton" onClick={() => props.pdfClickHandler('NormasSeguridadSalud')}>Normas seguridad y salud</Dropdown.Item>
                            <Dropdown.Item href="#/pdf" id="boton" onClick={() => props.pdfClickHandler('RiesgosGenerales')}>Riesgos generales</Dropdown.Item>
                            <Dropdown.Item href="#/pdf" id="boton" onClick={() => props.pdfClickHandler('SegregacionResiduos')}>Segregación de residuos</Dropdown.Item>
                            <Dropdown.Item href="#/pdf" id="boton" onClick={() => props.pdfClickHandler('UsoTrapos')}>Uso de trapos</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton id="boton" title="Varios" variant="secondary" size="lg">
                            <Dropdown.Item href="#/pdf" id="boton" onClick={() => props.pdfClickHandler('Kilometraje')}>Kilometraje</Dropdown.Item>
                            <Dropdown.Item href="#/pdf" id="boton" onClick={() => props.pdfClickHandler('TablaIRPF')}>Tabla IRPF</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comunicates;