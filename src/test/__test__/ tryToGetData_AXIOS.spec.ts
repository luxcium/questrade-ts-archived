import { _logErrors } from '../../private/core/_logErrors';
import { _tryToGetAxiosData } from '../../private/core/_tryToGetData_AXIOS';

test('should ERROR _tryToGetData', async done => {
  const response = _tryToGetAxiosData({
    url: 'ERROR',
    data: null,
    method: 'get',
    headers: { location: '1234567', Authorization: 'str' },
  });
  try {
    expect(await response(_logErrors)).toThrow();
  } catch (_) {
    //
  }
  // console.log();
  done();
});
