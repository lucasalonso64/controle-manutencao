import React, { Component } from 'react';
import api from '../services/api';
import './New.css';
import { async } from 'q';

class New extends Component {
    state = {
        kmabastecimento: '',
        kmatual: '',
        quantidadelitro: '',
        valorlitro: '',
        kmrodado: '',

    }

    handleSubmit = async e => {
        e.preventDefault();

        const data = new FormData();
        data.append('kmabastecimento', this.state.kmabastecimento);
        data.append('kmatual', this.state.kmatual);
        data.append('quantidadelitro', this.state.quantidadelitro);
        data.append('valorlitro', this.state.valorlitro);
        data.append('kmrodado', this.state.kmrodado);

        await api.post('posts', data)

        this.props.history.push('/');



    }

    // handleImageChange = e => {
    //     this.setState({ image: e.target.files[0] });
    // }
    calcular() {
        let kmrodado = parseInt(this.state.kmatual) - parseInt(this.state.kmabastecimento)
        this.setState({ kmrodado })
    }


    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }


    render() {
        return (
            <div>
                <form id="new-post" onSubmit={this.handleSubmit}>

                    <input type="file" onChange={this.handleImageChange} />

                    <input
                        type="text"
                        name="kmabastecimento"
                        placeholder="Km de abastecimento"
                        onChange={this.handleChange}
                        value={this.state.kmabastecimento}
                    />

                    <input
                        type="text"
                        name="kmatual"
                        placeholder="km atual"
                        onChange={this.handleChange}
                        value={this.state.kmatual} />

                    <input
                        type="text"
                        name="kmrodado"
                        placeholder="km rodado"
                        onChange={this.handleChange}
                        value={this.state.kmrodado} />

                    <input
                        type="text"
                        name="quantidadelitro"
                        placeholder="Quantidade de litro"
                        onChange={this.handleChange}
                        value={this.state.quantidadelitro}
                    />

                    <input
                        type="text"
                        name="valorlitro"
                        placeholder="Valor do litro"
                        onChange={this.handleChange}
                        value={this.state.valorlitro}
                    />


                    <br></br>
                    <button type="submit">Salvar</button>
                </form>
                <div id="calcular">
                    <button onClick={this.calcular.bind(this)} >Calcular</button>
                </div>

            </div>
        );
    }
}

export default New;