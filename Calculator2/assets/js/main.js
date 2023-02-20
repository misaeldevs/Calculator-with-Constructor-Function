function Calculator() {

    this.display = document.querySelector(".display")

    this.start = () => {
        this.captureClick()
        this.captureEnter()
    }

    this.captureEnter = () => {
        this.display.addEventListener("keypress", e => {
            if (e.keyCode === 13) {
            this.performOperation()
            }
        })
    }

    this.captureClick = () => {
        document.addEventListener("click", e => {
            const el = e.target
            if (el.classList.contains("btn-num")) this.addNumberDisplay(el)
            if (el.classList.contains("btn-clear")) this.clear()
            if (el.classList.contains("btn-del")) this.del()
            if (el.classList.contains("btn-eq")) this.performOperation()
        })
    }

    this.performOperation = () => {
        try {
            const operation = eval(this.display.value)

            if (!operation) {
                alert("Invalid Operation!")
                return
            }

            this.display.value = operation
        } catch (e) {
            alert("Invalid Operation!")
            return
        }
    }

    this.addNumberDisplay = el => {
        this.display.value += el.innerText
        this.display.focus()
    }

    this.clear = () => this.display.value = ""
    this.del = () => this.display.value = this.display.value.slice(0, -1)
}

const calculator = new Calculator()
calculator.start()