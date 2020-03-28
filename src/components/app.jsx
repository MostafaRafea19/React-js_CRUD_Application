import React from "react";
import Table from "./table";
import Form from "./form";

class App extends React.Component {

  state = {
    contents: [
      { id: 1, name: "Mostafa", score: 50, read: false, edit: false },
      { id: 2, name: "Ahmed", score: 30, read: false, edit: false }
    ],

    // Boolean variable to specify the current status as if it is adding or updating

    status: false,
    btnStat: false
  };

  // Refs for form inputs

  form = React.createRef();
  input1 = React.createRef();
  input2 = React.createRef();
  input3 = React.createRef();

  // Add new user button

  add = (e) => {
    e.preventDefault();
    if (
      this.input1.current.value === "" ||
      this.input2.current.value === "" ||
      this.input3.current.value === ""
    ) {
      alert("Please fill all fields");
    }
    else {
      const newUser = {
        id: Number(this.input1.current.value),
        name: this.input2.current.value,
        score: Number(this.input3.current.value),
        read: false,
        edit: false
      };
      let items = this.state.contents;
      let isEntered = true;
      items.filter(item => {
        if (newUser.id === item.id) {
          isEntered = false;
          this.input1.current.value = "";
          alert("Please enter a different ID");
        }
        return true;
      })
      if (isEntered === true) {
        items.push(newUser);
        this.setState({ contents: items });
        this.form.current.reset();
      }
    }
      
  }

  // Read button

  toggle = (id) => {
    this.setState((state) => {
      const contents = state.contents.filter((item) => {
        if (item.id === id) {
          item.read = true;
        }
        return item;
      })
      return contents;
    });
    this.setState({
      status: false,
      btnStat: false
    });
    this.form.current.reset();
  };

  // Edit button

  edit = (id, name, score) => {
    this.state.btnStat = true;
    this.input1.current.value = id;
    this.input1.current.focus();
    this.input2.current.value = name;
    this.input3.current.value = score;
    this.setState({ status: true });

    this.setState((state) => {
      const contents = state.contents.filter((item) => {
        if (item.id === id) {
          item.edit = true;
        }
        else {
          item.edit = false;
        }
        return item;
      })
      return contents;
    })
  }

  // Update button

  update = (e) => {
    e.preventDefault();

    if (
      this.input1.current.value === "" ||
      this.input2.current.value === "" ||
      this.input3.current.value === ""
    ) {
      alert("Please fill all fields");
    }
    else {
      const list = this.state.contents.filter((item) => {
        if (!item.edit) {
          return item;
        }
      })

      let isHere = true;

      list.map((item) => {
        if (Number(this.input1.current.value) === item.id) {
          isHere = false;
          this.input1.current.value = "";
          alert("Please enter a different ID");
        }
      })
      if (isHere) {
        this.setState((state) => {
          const contents = state.contents.filter((item) => {
            if (item.edit) {
              item.id = Number(this.input1.current.value);
              item.name = this.input2.current.value;
              item.score = Number(this.input3.current.value);
            }
            return item;
          })
          return contents;
        },  () => {this.form.current.reset()});
        this.setState({ status: false });
        this.setState({ btnStat: false });
      }
    }
  }

  // Delete button

  delete = (id) => {
    const list = this.state.contents.filter((item) => {
      if(id !== item.id){
        return item;
      }
    });
    this.setState({
      contents: list,
      status: false,
      btnStat: false
    });
  }

  // Rendering

  render() {
    return (
      <React.Fragment>
        <section className="container">
          <h1>CRUD App</h1>
          <section className="row mt-5">
            <section className="col-6">
              <Form submit={this.add} form={this.form} ref1={this.input1} ref2={this.input2} ref3={this.input3} status={this.state.status} update={this.update} btnStat={this.state.btnStat}/>
            </section>
            <section className="col-6">
              <h2>View users</h2>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Score</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.contents.map(item => (
                    <Table id={item.id} name={item.name} score={item.score} key={item.id} read={item.read} toggle={this.toggle} edit={this.edit} delete={this.delete}/>
                  ))}
                </tbody>
              </table>
            </section>
          </section>
        </section>
      </React.Fragment>
    );
  }
}

export default App;
