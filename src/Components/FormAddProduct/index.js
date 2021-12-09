
const FormAddProduct = () => {
    const style = {
        padding: '50px',
        width: '700px',
        backgroundColor: 'pink',
        display: 'flex',
        flexDirection: 'column'
    }

    return (
        <>
            <div style={style}>
                <input name='nameProduct' placeholder="nameProduct" type='text' />
                <input name='category' placeholder="category" type='radio' />
                
                <input name='price' placeholder="price" type='number' />

                <div style={{
                    backgroundColor: 'tomato'
                }}>
                <input name='size' placeholder="size" type='number' />
                <input name='amount' placeholder="amount" type='number' />
                </div>
             

                <input name='image' placeholder="image" type='file' />
                <input name='sale' placeholder="sale" type='number' />
                <input name='description' placeholder="description" type='text' />
                <input name='status' placeholder="status" type='checkbox' />
                
                <input name='categoryColor' placeholder="categoryColor" type='radio' />

                

               <button> Send</button>

            </div>
        </>
    )
}

export default FormAddProduct