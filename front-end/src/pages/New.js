import React, { Component } from 'react';
import api from '../services/api';
import './New.css';
import { async } from 'q';
import Joi from "joi-browser";

class New extends Component {
    state = {
        kmtroca: '',
        kmptroca: '',
        dataptroca: '',
        data: {},
        errors: {},
    }

    handleSubmit = async e => {
        e.preventDefault();

        const data = new FormData();
        data.append('kmtroca', this.state.kmtroca);
        data.append('kmptroca', this.state.kmptroca);
        data.append('dataptroca', this.state.dataptroca);
        await api.post('posts', data)

        this.props.history.push('/');
    }
    calcular() {
        let kmtroca
        let kmptroca = Number.parseInt(this.state.kmtroca) + 1000
        if ((kmptroca == "" || kmptroca == null) && (kmtroca == "" || kmtroca == null))
            return kmptroca = 0
        else this.setState({ kmptroca })


        this.calculaDias()
    }

    calculaDias() {
        // let date1 = new Date        
        //     ( date1.getDay() -14)
        // this.setState({ date1 })

        var dataptroca = new Date();

        //document.write('Hoje é: ' + date1.toLocaleString());

        dataptroca.setDate(dataptroca.getDate() + 15);
        this.setState({ dataptroca })

        // document.write('<br>14 dias atrás: ' + date1.toLocaleString());

    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    schema = {
        kmtroca: Joi.string().required(),
        genre: Joi.string().required(),
        numberInStock: Joi.number()
          .min(1)
          .max(100)
          .required(),
        rate: Joi.number()
          .min(1)
          .max(10)
          .required()
      };

      renderInput = (name, label, type = "text") => {
        const { data, errors } = this.state;
 
      };



    render() {
        const { data, errors } = this.state;

        return (
            <div>
                <form id="new-post" onSubmit={this.handleSubmit}>
                    <label>Trocado com:</label>
                    <input
                        type="text"
                        name="kmtroca"
                        placeholder="Trocado com"
                        onChange={this.handleChange}
                        value={this.state.kmtroca}
    
                        onBlur={this.calcular.bind(this)}

                    />
                    <label>Próxima troca:</label>
                    <input
                        type="text"
                        name="kmptroca"
                        placeholder="Próxima troca"
                        onChange={this.handleChange}
                        value={this.state.kmptroca} />

                    <input
                        type="text"
                        name="now"
                        placeholder="Data próxima troca:"
                        onChange={this.handleChange}
                        value={this.state.dataptroca}
                    />

                    <br></br>
                    <button onClick={this.calcular.bind(this)} onBlur={this.calcular.bind(this)} type="submit">Salvar</button>
                   
                </form>
                <div id="calcular">
                    <button onClick={this.calcular.bind(this)} >Calcular</button>
                </div>
            </div>
        );
    }
}

export default New;