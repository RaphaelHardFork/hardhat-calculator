const { expect } = require("chai")

describe("SimpleCalculator", function () {
  describe("Public functions", function () {
    let simpleCalculator
    beforeEach(async function () {
      const SimpleCalculator = await ethers.getContractFactory("SimpleCalculator")
      simpleCalculator = await SimpleCalculator.deploy()
      await simpleCalculator.deployed()
    })

    it("Should return the sum of two numbers", async function () {
      expect(await simpleCalculator.add(1, 4)).to.equal(1 + 4)
    })

    it("Should return the sub of two numbers", async function () {
      expect(await simpleCalculator.sub(1, 4)).to.equal(1 - 4)
    })

    it("Should return the mul of two numbers", async function () {
      expect(await simpleCalculator.mul(1, 4)).to.equal(1 * 4)
    })

    it("Should return the mod of two numbers", async function () {
      expect(await simpleCalculator.mod(1, 4)).to.equal(1 % 4)
    })

    it("Should return the div of two numbers", async function () {
      expect(await simpleCalculator.div(4, 2)).to.equal(4 / 2)
    })

    it("Should revert the operation", async function () {
      // En mettant le await devant expect, le test marche
      await expect(simpleCalculator.div(4, 0)).to.be.revertedWith("SimpleCalculator: cannot divide by zero.")
    })

    it('Should increment the nbOperation for each function', async function () {
      await simpleCalculator.add(1, 1)
      await simpleCalculator.add(1, 1)
      await simpleCalculator.add(1, 1)
      expect(await simpleCalculator.nbOperation()).to.equal(3)
    })
  })
})