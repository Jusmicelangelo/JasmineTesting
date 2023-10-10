describe ("Helper Tests", function () {
    beforeEach(function () {
        billAmtInput.value = 50;
        tipAmtInput.value = 5;
        submitPaymentInfo();
    });

    it('should sum total tip amount of all payments on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(5);
    
        billAmtInput.value = 100;
        tipAmtInput.value = 10;
    
        submitPaymentInfo();
    
        expect(sumPaymentTotal('tipAmt')).toEqual(15);
    });

    it('should sum tip percent of a single tip on calculateTipPercent()', function () {
        expect(calculateTipPercent(50, 5)).toEqual(10);
    });
    
    it('should generate new td from value and append to tr on appendTd(tr, value)', function () {
        let newTr = document.createElement('tr');
    
        appendTd(newTr, 'test');
    
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
    });

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
})