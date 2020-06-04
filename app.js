class Clock extends React.Component {

    state = {
        time: this.getTime()
    }

    getTime() {
        const currentTime = new Date();
        console.log(currentTime);
        return ({
            hours: currentTime.getHours(),
            minutes: currentTime.getMinutes(),
            seconds: currentTime.getSeconds(),
        })
    }

    setTime() {
        const time = this.getTime()
        this.setState({ time }) // time: time 
    }

    componentDidMount() {
        this.interval = setInterval(this.setTime.bind(this), 1000);

    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        const { hours, minutes, seconds } = this.state.time;
        return (
            <div>
                {hours} : {minutes} : {seconds}
            </div>
        )
    }
}

ReactDOM.render(<Clock />, document.getElementById('root'));