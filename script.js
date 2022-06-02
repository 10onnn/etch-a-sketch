function createGrid(size)
{
    const container = document.querySelector('.gridContainer')
    container.style.cssText = "display: flex; flex-direction: column; justify-content: space-between"
    
    for (let i = 0; i < size; i++)
    {
        const gridRow = document.createElement('div')
        gridRow.classList.add('row')
        gridRow.style.cssText = "display: flex; justify-content: space-between"
        for (let j = 0; j < size; j++)
        {
            const gridBox = document.createElement('div')
            gridBox.classList.add('box')
            let boxSize = 600/size;
            gridBox.style.cssText = `border: black; border-width: 2px; height: ${boxSize}px; width: ${boxSize}px`
            gridRow.appendChild(gridBox)
        }

        container.appendChild(gridRow)
    }

}

function chooseSize ()
{
    let size = prompt("Choose the grid size from 1x1 to 100x100")
    createGrid(size)
}

function darken(e)
{
 this.classList.add('sketched')
}

chooseSize()

const gridSquare = document.querySelectorAll('.box')
gridSquare.forEach(box => box.addEventListener('mouseover', darken))