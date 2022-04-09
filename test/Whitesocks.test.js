const whitesocks = artifacts.require('WhiteSocks')

require('chai').should();


contract('WhiteSocks', accounts => {
    const _name = "WhiteSocks";
    const _symbol = "WS";
    const _decimals = 18;

    beforeEach( async function (){
        this.token = await whitesocks.new(100)
    });

    describe('token attributes', function(){
        it('has a name', async function(){
            const name = await this.token.name();
            name.should.equal(_name);
        });
        it('has a balance of', async function (){
            const balance = await this.token.totalSupply()
        })

    });
})