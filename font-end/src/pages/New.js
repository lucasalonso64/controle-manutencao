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

    }

    handleSubmit = async e => {
        e.preventDefault();

        const data = new FormData();
        data.append('kmabastecimento', this.state.kmabastecimento);
        data.append('kmatual', this.state.kmatual);
        data.append('quantidadelitro', this.state.quantidadelitro);
        data.append('valorlitro', this.state.valorlitro);

        await api.post('posts', data)

        this.props.history.push('/');



    }

    // handleImageChange = e => {
    //     this.setState({ image: e.target.files[0] });
    // }


    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }


    render() {
        return (
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
                <button type="submit">Processar</button>
                <br></br>
                <button type="submit">Enviar</button>
            </form>
        );
    }
}

export default New;