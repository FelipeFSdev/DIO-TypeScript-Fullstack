import { submit } from "./submit"

describe("submit", () => {
    const mockAlert = jest.fn()
    window.alert = mockAlert
    it("Show a 'Welcome' message", () => {
        submit()
        expect(mockAlert).toBeCalled()
    })
})