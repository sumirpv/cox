/*
 * DealersAndVehicles
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.18
 *
 * Do not edit the class manually.
 *
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DealersAndVehicles);
  }
}(this,  function(expect, DealersAndVehicles)  {
  'use strict';

  var instance;

  beforeEach(function()  {
    instance = new DealersAndVehicles.DataSetApi();
  });

  describe('(package)', function()  {
    describe('DataSetApi', function()  {
      describe('getCheat', function()  {
        it('should call getCheat successfully',  function(done)  {

          var datasetId = "22EgCqTL2Ag";

          instance.getCheat(datasetId, function(error, data, response)  {

            if (error) {
              done(error);
              return;
            }
            expect(data).to.be.a(DealersAndVehicles.Answer);
            {
              let dataCtr = data.dealers;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();

              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(DealersAndVehicles.DealerAnswer);
                expect(data.dealerId).to.be.a('number');
                expect(data.dealerId).to.be(0);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                {
                  let dataCtr = data.vehicles;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();

                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(DealersAndVehicles.VehicleAnswer);
                    expect(data.vehicleId).to.be.a('number');
                    expect(data.vehicleId).to.be(0);
                    expect(data.year).to.be.a('number');
                    expect(data.year).to.be(0);
                    expect(data.make).to.be.a('string');
                    expect(data.make).to.be("");
                    expect(data.model).to.be.a('string');
                    expect(data.model).to.be("");
                  }
                }

              }
            }
            expect(response).to.have.status(200)
            done();
          });
          done();
        });
      });
      describe('getDataSetId', function()  {
        it('should call getDataSetId successfully', function(done)  {

          instance.getDataSetId(function(error, data, response)  {

            if (error) {
              done(error);
              return;
            }
            expect(data).to.be.a(DealersAndVehicles.DatasetIdResponse);
            expect(data.datasetId).to.be.a('string');
            expect(data.datasetId).to.be("");
            expect(response).to.have.code(200);
            done();
          });
          done();
        });
      });
      describe('postAnswer', function()  {
        it('should call postAnswer successfully', function(done)  {

          var datasetId = "22EgCqTL2Ag";
          var opts = {};
          opts.answer = new DealersAndVehicles.Answer();
          opts.answer.dealers = [new DealersAndVehicles.DealerAnswer()];
          opts.answer.dealers[0].dealerId = 1493533791;
          opts.answer.dealers[0].name = "Bob's Cars";
          opts.answer.dealers[0].vehicles = [new DealersAndVehicles.VehicleAnswer()];
          opts.answer.dealers[0].vehicles[0].vehicleId = 2029649430;
          opts.answer.dealers[0].vehicles[0].year = 2016;
          opts.answer.dealers[0].vehicles[0].make = "Honda";
          opts.answer.dealers[0].vehicles[0].model = "Accord";

          instance.postAnswer(datasetId, opts, function(error, data, response)  {

            if (error) {
              done(error);
              return;
            }

            expect(data).to.be.a(DealersAndVehicles.AnswerResponse);
            expect(data.success).to.be.a('boolean');
            expect(data.success).to.be(false);
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");
            expect(data.totalMilliseconds).to.be.a('number');
            expect(data.totalMilliseconds).to.be(0);
            expect(response).to.have.code(200);
            done();
          });
          done();
        });
      });
    });
  });
}));
