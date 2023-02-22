"use strict";

var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
var _Clock = _interopRequireDefault(require("./Clock"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('Clock', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Clock.default, null));
  });
  it('should render a clock face', function () {
    expect(wrapper.find('.clock-face')).toHaveLength(1);
  });
  it('should have hour, minute, and second hands', function () {
    expect(wrapper.find('.hour-hand')).toHaveLength(1);
    expect(wrapper.find('.minute-hand')).toHaveLength(1);
    expect(wrapper.find('.second-hand')).toHaveLength(1);
  });
  it('should display the current time in digital format', function () {
    var digital = wrapper.find('.digital');
    expect(digital).toHaveLength(1);
    expect(digital.text().length).toBeGreaterThan(0);
  });
  it('should update the time every second', function () {
    jest.useFakeTimers();
    var setDateSpy = jest.spyOn(global, 'Date').mockImplementation(function () {
      return {
        getHours: function getHours() {
          return 0;
        },
        getMinutes: function getMinutes() {
          return 0;
        },
        getSeconds: function getSeconds() {
          return 0;
        },
        toLocaleTimeString: function toLocaleTimeString() {
          return '00:00:00';
        }
      };
    });
    wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Clock.default, null));
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    jest.advanceTimersByTime(1000);
    wrapper.update();
    expect(setDateSpy).toHaveBeenCalledTimes(2);
    expect(wrapper.find('.digital').text()).toEqual('00:00:01');
    setDateSpy.mockRestore();
    jest.useRealTimers();
  });
});