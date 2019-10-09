import {
  OrderSide,
  OrderState,
  OrderTimeInForce,
  OrderType,
} from 'questrade-api-enumerations';
import { IOrder } from '../../api/typescript';
export const order: IOrder = {
  id: 498268725,
  symbol: 'AMD',
  stockId: 6770,
  totalQuantity: 106,
  openQuantity: 0,
  filledQuantity: 106,
  canceledQuantity: 0,
  side: OrderSide.SELL,
  orderType: OrderType.LIMIT,
  limitPrice: 10.15,
  stopPrice: null,
  isAllOrNone: false,
  isAnonymous: false,
  icebergQuantity: null,
  minQuantity: null,
  avgExecPrice: 10.1508,
  lastExecPrice: null,
  source: 'QuestradeIQMobile',
  timeInForce: OrderTimeInForce.GOOD_TILL_CANCELED,
  gtdDate: null,
  state: OrderState.EXECUTED,
  rejectionReason: '',
  chainId: 498268725,
  creationTime: '2018-04-19T15:40:08.330000-04:00',
  updateTime: '2018-04-19T15:40:08.393000-04:00',
  notes: '',
  primaryRoute: 'AUTO',
  secondaryRoute: '',
  orderRoute: 'MNGD',
  venueHoldingOrder: 'MNGD',
  comissionCharged: 4.974855,
  exchangeOrderId: '',
  isSignificantShareHolder: false,
  isInsider: false,
  isLimitOffsetInDollar: false,
  userId: 126691,
  placementCommission: null,
  legs: [],
  strategyType: 'SingleLeg',
  triggerStopPrice: null,
  orderGroupId: 0,
  orderClass: null,
  isCrossZero: false,
};
