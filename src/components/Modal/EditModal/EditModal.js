import React from "react";

class EditModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            text: this.props.text
        };

        this.changeText = this.changeText.bind(this);
    }

    close() {
        this.props.closeModal();
    }

    newRef = React.createRef();

    changeText() {
        this.setState({
            text: this.newRef.current.value
        });
    }

    save() {
        const {id, text} = this.state;
        const text1 = this.newRef.current.value;
        this.props.editTask(id, text1);
        this.close();
    }

    render() {

        return (
            <div>
                <div className="modal-body">
                    {console.log(this.props)}
                    <textarea maxlength="30" ref={this.newRef} onChange={this.changeText} value={this.state.text} cols="40"/>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={() => this.save()}>Save changes</button>
                    <button type="button" className="btn btn-secondary" onClick={() => this.close()}>Close</button>
                </div>
            </div>
        )
    }
}

export default EditModal;