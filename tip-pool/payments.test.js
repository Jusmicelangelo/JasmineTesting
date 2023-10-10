describe ("Payment tests", function (){
    beforeEach (function () {
        billAmtInput.value = 50;
        tipAmtInput.value = 5;
    })

    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
        submitPaymentInfo();
        
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('50');
        expect(allPayments['payment1'].tipAmt).toEqual('5');
        expect(allPayments['payment1'].tipPercent).toEqual(Number(10));
      });

    it('should payment update #paymentTable on appendPaymentTable()', function () {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;

        appendPaymentTable(curPayment);

        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

        expect(curTdList.length).toEqual(3);
        expect(curTdList[0].innerText).toEqual('$50');
        expect(curTdList[1].innerText).toEqual('$5');
        expect(curTdList[2].innerText).toEqual('10%');
    });

    it('should create a new payment on createCurPayment()', function () {
        let expectedPayment = {
            billAmt: '50',
            tipAmt: '5',
            tipPercent: 10,
        }
        expect(createCurPayment()).toEqual(expectedPayment);
    });

    afterEach (function () {
        paymentId = 0;
        allPayments = {};
        serverTbody.innerHTML = '';
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
    })
});
    