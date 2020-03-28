import React from 'react';

class table extends React.Component {

    render() {

        // Add class read to name after pressing read button

        let readBtn = "";
        if (this.props.read === true) {
            readBtn = "read";
        };

        // rendering

        return (
            <React.Fragment>
                <tr>
                    <th>{this.props.id}</th>
                    <td className={readBtn}>{this.props.name}</td>
                    <td>{this.props.score}</td>
                    <td>
                        <button type="button" className="btn btn-success mx-1" disabled={this.props.read} onClick={() => this.props.toggle(this.props.id)}>Read</button>
                        <button type="button" className="btn btn-info mx-1" onClick={() => this.props.edit(this.props.id, this.props.name, this.props.score)} disabled={this.props.read}>Edit</button>
                        <button type="button" className="btn btn-danger mx-1" onClick={() => this.props.delete(this.props.id)}>Delete</button>
                    </td>
                </tr>
            </React.Fragment>
        )
    }

}

export default table;