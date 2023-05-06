import Welcome from './Welcome'
// import styles from './invitation.module.scss'

const Invitation = () => {
  return (
    <>
      <Welcome />
      <section>
        <h2>GALLERY</h2>
      </section>
      <section>
        <h2>LOCATION</h2>
      </section>
      <section>
        <h2>DATE</h2>
        <div id='calendar'>
          <div className='calendar_inner'>
            <div className='calendar_ym'>2023.06</div>
            <table className='calendar'>
              <caption>June 2023</caption>
              <tbody>
                <tr>
                  <th className='header'>일</th>
                  <th className='header'>월</th>
                  <th className='header'>화</th>
                  <th className='header'>수</th>
                  <th className='header'>목</th>
                  <th className='header'>금</th>
                  <th className='header'>토</th>
                </tr>
                <tr>
                  <td colSpan={4}>&nbsp;</td>
                  <td className='day'>
                    <span>1</span>
                  </td>
                  <td className='day'>
                    <span>2</span>
                  </td>
                  <td className='day'>
                    <span>3</span>
                  </td>
                </tr>
                <tr>
                  <td className='day'>
                    <span>4</span>
                  </td>
                  <td className='day'>
                    <span>5</span>
                  </td>
                  <td className='day'>
                    <span>6</span>
                  </td>
                  <td className='day'>
                    <span>7</span>
                  </td>
                  <td className='day'>
                    <span>8</span>
                  </td>
                  <td className='day'>
                    <span>9</span>
                  </td>
                  <td className='day'>
                    <span>10</span>
                  </td>
                </tr>
                <tr>
                  <td className='day'>
                    <span>11</span>
                  </td>
                  <td className='day'>
                    <span>12</span>
                  </td>
                  <td className='day'>
                    <span>13</span>
                  </td>
                  <td className='day'>
                    <span>14</span>
                  </td>
                  <td className='day'>
                    <span>15</span>
                  </td>
                  <td className='day'>
                    <span>16</span>
                  </td>
                  <td className='day'>
                    <span>17</span>
                  </td>
                </tr>
                <tr>
                  <td className='day'>
                    <span>18</span>
                  </td>
                  <td className='day'>
                    <span>19</span>
                  </td>
                  <td className='day'>
                    <span>20</span>
                  </td>
                  <td className='day dday'>
                    <span>21</span>
                  </td>
                  <td className='day'>
                    <span>22</span>
                  </td>
                  <td className='day'>
                    <span>23</span>
                  </td>
                  <td className='day'>
                    <span>24</span>
                  </td>
                </tr>
                <tr>
                  <td className='day'>
                    <span>25</span>
                  </td>
                  <td className='day'>
                    <span>26</span>
                  </td>
                  <td className='day'>
                    <span>27</span>
                  </td>
                  <td className='day'>
                    <span>28</span>
                  </td>
                  <td className='day'>
                    <span>29</span>
                  </td>
                  <td className='day'>
                    <span>30</span>
                  </td>
                  <td colSpan={1}>&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section>
        <h2>마음 전하실 곳</h2>
      </section>
      <section>
        <h2>방명록</h2>
      </section>
    </>
  )
}

export default Invitation
