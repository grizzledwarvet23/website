// coding our first component!

class WelcomeBack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            appVersion: ''
        }
    }

    

  render() {
    return(
        //this is called fragment
        <>
        <h2>Hello {this.state.name || 'Friend'}! Welcome Back.</h2>
        <button>Download</button>
        </>
    )
  }
}

