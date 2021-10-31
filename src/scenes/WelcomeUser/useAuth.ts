const randomBoolean = () => Math.random() > 0.5
export const useAuth = () => {
    /*
    Lets imagine we have a few requests and some logic to make these objects
    */

    const isTeacher = randomBoolean()

    const teacher = isTeacher ? { name: 'Carl', age: 30, id: 1 } : {}
    const student = !isTeacher ? { name: 'Jung', age: 15, id: 1 } : {}

    return { teacher, student }
}
