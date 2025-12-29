// เริ่มเขียนโค้ดตรงนี้
const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    data.filter((n) => n.name.length > 17)
    const result = data.map((n) => n ).filter((n) => n.name.length > 17  )
    const total = result.map((n) => n.name)
    return console.log(total)
}
getUsers()